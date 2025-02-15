library(psycho)
library(dplyr)

sd_df <- read.csv("signal_detection_df.csv")

sd_df$hit <- 0
sd_df$false_alarm <- 0
sd_df[(sd_df$correct_answer == "True") & (sd_df$response == "True"), "hit"] <- 1
sd_df[(sd_df$correct_answer == "False") & (sd_df$response == "True"), "false_alarm"] <- 1
sd_df[sd_df$correct == "True", "correct"] <- 1
sd_df[sd_df$correct == "False", "correct"] <- 0
sd_df$correct <- as.numeric(sd_df$correct)

summarize_df <- sd_df %>% group_by(id) %>%
  summarise(total_correct = sum(correct), 
            total_hit = sum(hit), 
            total_fa = sum(false_alarm),
            .groups = 'drop')

indices <- psycho::dprime(
  n_hit = summarize_df$total_hit,
  n_fa = summarize_df$total_fa,
  n_targets = 8,
  n_distractors = 8,
  adjusted = FALSE
)

hist(indices$aprime)
summarize_df$aprime <- indices$aprime
summarize_df$dprime <- indices$dprime


summarize_df[is.na(summarize_df$dprime),]
plot(summarize_df$aprime, summarize_df$dprime)
hist(summarize_df$aprime)
summarize_df[summarize_df$aprime > 0.5, ]

sum(summarize_df$aprime > 0.5)
write.csv(summarize_df, "signal_detection_results.csv")

