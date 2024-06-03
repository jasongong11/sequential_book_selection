library("scales")
library(ggsci)
show_col(pal_npg("nrc")(10))
library(ggpubr)
pal_npg("nrc")(10)
library(censReg)
library(rstatix)

df_model <- read.csv("prolific_model_fitting_final.csv")

df_model$beta[df_model$beta < -4.99] <- -4.99
estResult1 <- censReg( beta ~ age + curiosity_je + curiosity_ts + curiosity_ds + 
                        curiosity_st + curiosity_sc , left =-4.99, 
                      data = df_model )
summary( estResult1 )


df_model$eta_ucb[df_model$eta_ucb < -4.99] <- -4.99
estResult2 <- censReg( eta_ucb ~ curiosity_je + curiosity_ds + curiosity_st + 
                        curiosity_sc + curiosity_ts + age, left =-4.99, 
                      data = df_model )
summary( estResult2 )

df_model$gamma_ucb[df_model$gamma_ucb < -4.99] <- -4.99
estResult3 <- censReg( gamma_ucb ~ curiosity_je + curiosity_ds + curiosity_st + 
                         curiosity_sc + curiosity_ts + age, left =-4.99, 
                       data = df_model )
summary( estResult3 )
