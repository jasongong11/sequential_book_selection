# sequential_book_selection

Here you can find the code for analyzing sequential book selection. 

## Code
The codes reside in two seperate directory for study 1 and study 2. 

Study 1 analyzed an online book selection dataset. We shared the codes to reproduce our analytical results and plot. We also share the code to scrape Goodreads to get the book summaries. 

Study 2 collected and analyzed book selection in a lab setting. We shared the code to reproduce our experiment (using Psychopy and Pavlovia). We also share the code to reproduce the computational models, statistical analysis and visualization. 

## Data

### Online book selection data
Online book selection data is open-sourced dataset and can be downloaded from [here](https://nijianmo.github.io/amazon/index.html). 

### Lab book selection data
We shared the behaviral data and survey data that were collected using Psychopy and Pavlovia platfrom where participants were recruited from Prolific. 

The analyzed data including model fiting data can also be found in the directory /data/s2/
=======
The analyzed data including model fiting data can also be found in the directory /data/s2/

### Directory tree
./
├── data
│   ├── s1
│   │   └── data.md
│   └── s2
│       ├── attention_check_signal_detection
│       │   ├── signal_detection_df.csv
│       │   └── signal_detection_results.csv
│       ├── behavioral_df.csv
│       ├── embedding_validation
│       │   ├── prolific_validation.csv
│       │   └── sampled_book_validation.csv
│       ├── grid_df.csv
│       ├── grid_layout.csv
│       ├── prolific_model_fitting.csv
│       └── prolific_participant_meta_df.csv
├── LICENSE
├── README.md
├── s1
│   ├── scrape_goodreads.py
│   ├── step1_preprocess_data.ipynb
│   ├── step2_download_book_metadata_goodreads.ipynb
│   ├── step3_create_book_embeddings.ipynb
│   ├── step4_computational_modeling_and_plotting.ipynb
│   └── step5_mixed_effect_model.ipynb
└── s2
    ├── behavioral_experiment_pavlovia
    │   ├── index.html
    │   └── sequential_media_selection_final.js
    ├── signal_detection
    │   └── signal_detection_analysis.R
    ├── step1_validate_embedding.ipynb
    ├── step2_computational_modeling_statistical_analysis.ipynb
    ├── step3_behavioral_statistical_analysis.ipynb
    ├── step4_mixed_effect_model.ipynb
    └── step5_cens_reg_models.R
