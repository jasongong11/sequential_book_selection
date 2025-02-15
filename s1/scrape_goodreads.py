from fake_headers import Headers
import requests
from bs4 import BeautifulSoup as bs

def open_file(file):
    with open(file) as fp:
        soup = bs(fp, 'html.parser')
    return soup

def get_descriptions(soup):
    descrip = soup.find_all('div', class_="DetailsLayoutRightParagraph__widthConstrained")[0].text
    return descrip

def get_title(soup):
    title = soup.find_all('div', class_="BookPageTitleSection__title")[0].text
    return title

def get_genre(soup):
    genres_insoup = soup.find_all('span', class_="BookPageMetadataSection__genreButton")
    genres = [genres.text for genres in genres_insoup if len(genres_insoup) > 0]
    return genres
    
def get_author(soup):
    author = soup.find_all('span', class_="ContributorLink__name")[0].text
    return author
    
def get_avg_rating(soup):
    avg_rating = soup.find_all('div', class_="RatingStatistics__rating")[0].text
    return avg_rating
    
def get_rating_count(soup):
    rating_count = soup.find_all('span', attrs={'data-testid': 'ratingsCount'})[0].text.split("\xa0")[0]
    rating_count = int(rating_count.replace(",", ""))
    return rating_count
    
def get_review_count(soup):
    review_count = soup.find_all('span', attrs={'data-testid': 'reviewsCount'})[0].text.split("\xa0")[0]
    review_count = int(review_count.replace(",", ""))
    return review_count

def get_rating_5_count(soup):
    rating_5 = soup.find_all('div', class_="RatingsHistogram__labelTotal", attrs={'data-testid': 'labelTotal-5'})[0].text
    rating_5 = rating_5.split(" ")[0]
    rating_5 = int(rating_5.replace(",", ""))
    return rating_5
def get_rating_4_count(soup):
    rating_4 = soup.find_all('div', class_="RatingsHistogram__labelTotal", attrs={'data-testid': 'labelTotal-4'})[0].text
    rating_4 = rating_4.split(" ")[0]
    rating_4 = int(rating_4.replace(",", ""))
    return rating_4
def get_rating_3_count(soup):
    rating_3 = soup.find_all('div', class_="RatingsHistogram__labelTotal", attrs={'data-testid': 'labelTotal-3'})[0].text
    rating_3 = rating_3.split(" ")[0]
    rating_3 = int(rating_3.replace(",", ""))
    return rating_3
def get_rating_2_count(soup):
    rating_2 = soup.find_all('div', class_="RatingsHistogram__labelTotal", attrs={'data-testid': 'labelTotal-2'})[0].text
    rating_2 = rating_2.split(" ")[0]
    rating_2 = int(rating_2.replace(",", ""))
    return rating_2
def get_rating_1_count(soup):
    rating_1 = soup.find_all('div', class_="RatingsHistogram__labelTotal", attrs={'data-testid': 'labelTotal-1'})[0].text
    rating_1 = rating_1.split(" ")[0]
    rating_1 = int(rating_1.replace(",", ""))
    return rating_1


def get_record(soup):
    description = get_descriptions(soup)
    title = get_title(soup)
    genres = get_genre(soup)
    author = get_author(soup)
    avg_rating = get_avg_rating(soup)
    rating_count = get_rating_count(soup)
    review_count = get_review_count(soup)
    rating_1_count = get_rating_1_count(soup)
    rating_2_count = get_rating_2_count(soup)
    rating_3_count = get_rating_3_count(soup)
    rating_4_count = get_rating_4_count(soup)
    rating_5_count = get_rating_5_count(soup)
    
    record = {"description": description,
             "title": title,
             "genres": genres,
             "author": author,
             "avg_rating": avg_rating,
             "rating_count": rating_count,
             "review_count": review_count,
             "rating_1_count": rating_1_count,
             "rating_2_count": rating_2_count,
             "rating_3_count": rating_3_count,
             "rating_4_count": rating_4_count,
             "rating_5_count": rating_5_count}
    
    return record
    
def get_page(base_url, data):
    try:
        headers = Headers().generate()
        r = requests.get(base_url, headers=headers, params=data)
    except:
        r = None
    return r