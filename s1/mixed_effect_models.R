library(lmerTest)
library(lme4)
library(hrbrthemes)
library(ggplot2)
library(geomtextpath)
library("dplyr")
library(tidyr)

df <- read.csv("s2_stats_test_final.csv")
prolific_df <- read.csv("prolific_behavioral.csv")
sapply(df, class)

df <- df %>% mutate_if(is.character, as.factor)


df %>% 
  ggplot(aes(x = cum_mean_before, y = step_size_after)) +
  geom_smooth( method = "lm", formula = y ~ x) +
  theme_bw() 

df %>% mutate(overall=factor(overall)) %>% 
  ggplot(aes(x = cum_mean_before, y = step_size_after, color=overall, )) +
  geom_labelsmooth(aes(label = overall), method = "lm", formula = y ~ x) +
  theme_bw() 

df %>% mutate(temp=(overall_new>0)) %>% 
  ggplot(aes(x = cum_mean_before, y = step_size_after, color=temp, )) +
  geom_labelsmooth(aes(label = temp), fill = "white",
                   method = "lm", formula = y ~ x,
                   size = 3, linewidth = 1, boxlinewidth = 0.4, level=0.90) +
  theme_bw() + guides(color = 'none')

df %>% mutate(temp=(cum_mean_before>0)) %>% 
  ggplot(aes(x = overall_new, y = step_size_after, color=temp, )) +
  geom_labelsmooth(aes(label = temp), fill = "white",
                   method = "lm", formula = y ~ x,
                   size = 3, linewidth = 1, boxlinewidth = 0.4, level=0.90) +
  theme_bw() + guides(color = 'none')

test <- df %>% select(reviewerID, order_new, overall_new, 
                      rating_dispersion, overall_new, 
                      avg_rating, avg_rating,
                      review_count_after, step_size_after) %>% drop_na() %>%
  group_by(reviewerID) %>% 
  summarise(improve_rate = cor(order_new, overall_new),
            number_rating = n(),
            rating_dispersion = mean(rating_dispersion),
            overall_mean = mean(overall_new),
            avg_rating_mean = mean(avg_rating),
            avg_review_count = mean(review_count_after),
            avg_step_size = mean(step_size_after))

cor(test[!is.na(test$improve_rate),2:8], method="spearman")


fm <- lmer(step_size_after ~ I(log(order_new+1))  + step_size_before + 
             overall_new * cum_mean_before + rating_dispersion_after + 
             review_count_log_after + avg_rating_after +
             (1|reviewerID),
             data=df[!is.infinite(df$review_count_log_after),], na.action = na.exclude)
# anova(fm)
summary(fm)



fm <- lmer(step_size_after ~ I(log(order_new+1)) + overall + (1|reviewerID),
           data=df, na.action = na.exclude)
# anova(fm)
summary(fm)
confint(fm)

fm <- lmer(step_size_after ~ I(log(order_new+1))  + step_size_before + 
              rating_dispersion_after + overall +
              review_count_log_after+
             (1|reviewerID),
           data=df[!is.infinite(df$review_count_log_after),], na.action = na.exclude)
# anova(fm)
summary(fm)
confint(fm)







colnames(prolific_df)


fm <- lmer(step_size_after ~ choice_index + step_size_before + enjoyment 
           + curiosity_je + curiosity_ts + curiosity_st + curiosity_sc + curiosity_ds +
             (1|id),
           data=prolific_df, na.action = na.exclude)
# anova(fm)
summary(fm)
confint(fm)
plot(fm)



fm <- lmer(enjoyment ~ choice_index + step_size_before * curiosity_je +
             (1|id),
           data=prolific_df, na.action = na.exclude)

# anova(fm)
summary(fm)
confint(fm)
plot(fm)






df%>%group_by(reviewerID) %>% summarise(mean_overall = mean(overall)) %>%
  ggplot(aes(x=mean_overall)) + geom_histogram()


colnames(df)


df %>% filter(order_new <= 100) %>% filter(order_new >= 2) %>%
  group_by(order_new) %>% 
  summarise(N = n(),
            avg = mean(overall),
            SE.low = avg - 2*(sd(overall)/sqrt(N)),
            SE.high = avg + 2*(sd(overall)/sqrt(N))) %>%
  ggplot(aes(x = order_new, y = avg)) +
    geom_line() + 
    geom_ribbon(alpha=0.5, aes(ymin=SE.low, ymax=SE.high))+
  theme_bw()
