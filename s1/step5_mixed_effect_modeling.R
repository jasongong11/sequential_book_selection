library(lmerTest)
library(lme4)
library(hrbrthemes)
library(ggplot2)
library(geomtextpath)
library("dplyr")
library(tidyr)

df <- read.csv("~/OneDrive/projects/dissertation/dissertation/s2_stats_test_final.csv")
prolific_df <- read.csv("~/OneDrive/projects/dissertation/dissertation/prolific_behavioral.csv")
sapply(df, class)
df <- df %>% mutate_if(is.character, as.factor)


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
             rating_dispersion_after + overall +
             review_count_log_after+
             (1|reviewerID),
           data=df[!is.infinite(df$review_count_log_after),], na.action = na.exclude)
summary(fm)
confint(fm)


fm <- lmer(step_size_after ~ choice_index + step_size_before + enjoyment 
           + curiosity_je + curiosity_ts + curiosity_st + curiosity_sc + curiosity_ds +
             (1|id),
           data=prolific_df, na.action = na.exclude)
summary(fm)
confint(fm)
plot(fm)



fm <- lmer(enjoyment ~ choice_index + step_size_before * curiosity_je +
             (1|id),
           data=prolific_df, na.action = na.exclude)
summary(fm)
confint(fm)
plot(fm)
