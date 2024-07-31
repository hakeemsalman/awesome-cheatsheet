```python
# Copyright 2023 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
```

# Text Classification with Generative Models on Vertex AI

> **NOTE:** This notebook uses the PaLM generative model, which will reach its [discontinuation date in October 2024](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text#model_versions). Please refer to [this updated notebook](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/prompts/examples/text_classification.ipynb) for a version which uses the latest Gemini model.

<table align="left">
  <td style="text-align: center">
    <a href="https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/examples/text_classification.ipynb">
      <img src="https://cloud.google.com/ml-engine/images/colab-logo-32px.png" alt="Google Colaboratory logo"><br> Run in Colab
    </a>
  </td>
  <td style="text-align: center">
    <a href="https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/examples/text_classification.ipynb">
      <img src="https://cloud.google.com/ml-engine/images/github-logo-32px.png" alt="GitHub logo"><br> View on GitHub
    </a>
  </td>
  <td style="text-align: center">
    <a href="https://console.cloud.google.com/vertex-ai/workbench/deploy-notebook?download_url=https://raw.githubusercontent.com/GoogleCloudPlatform/generative-ai/main/language/prompts/examples/text_classification.ipynb">
      <img src="https://lh3.googleusercontent.com/UiNooY4LUgW_oTvpsNhPpQzsstV5W8F7rYgxgGBD85cWJoLmrOzhVs_ksK_vgx40SHs7jCqkTkCk=e14-rj-sc0xffffff-h130-w32" alt="Vertex AI logo"><br> Open in Vertex AI Workbench
    </a>
  </td>
</table>


| | |
|-|-|
|Author(s) | [Polong Lin](https://github.com/polong-lin) |

## Overview

Generative models like PaLM 2 are powerful language models used for various natural language processing (NLP) tasks. One of those is text classification, which involves assigning one or more categories to a given piece of text. Although text classification can be done using traditional NLP techniques, LLMs can perform classification by providing prompts (as opposed to domain-specific labeled data), which can accelerate the time it takes to build a text classification solution. Classification models based on LLMs can be further tuned with many examples via custom model training, but that is beyond the scope of this notebook.

In this notebook, you will explore how to do text classification using prompts with the PaLM API. Learn more about classification prompts in the [official documentation](https://cloud.google.com/vertex-ai/docs/generative-ai/text/classification-prompts).

### Objective

By the end of the notebook, you should be able to use a large language model to perform various classification tasks, including:

* Zero-shot prompting text classification
* Few-shot prompting text classification
* Common tasks:
    * Sentiment analysis
    * Topic classification
    * Spam detection
    * Intent recognition
    * Language identification
    * Toxicity detection
    * Emotion detection

## Getting Started

### Install Vertex AI SDK


```python
!pip install google-cloud-aiplatform --upgrade --user
```

    Requirement already satisfied: google-cloud-aiplatform in /home/jupyter/.local/lib/python3.10/site-packages (1.60.0)
    Requirement already satisfied: google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1 in /home/jupyter/.local/lib/python3.10/site-packages (from google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (2.19.1)
    Requirement already satisfied: google-auth<3.0.0dev,>=2.14.1 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (2.31.0)
    Requirement already satisfied: proto-plus<2.0.0dev,>=1.22.3 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (1.24.0)
    Requirement already satisfied: protobuf!=3.20.0,!=3.20.1,!=4.21.0,!=4.21.1,!=4.21.2,!=4.21.3,!=4.21.4,!=4.21.5,<5.0.0dev,>=3.19.5 in /home/jupyter/.local/lib/python3.10/site-packages (from google-cloud-aiplatform) (4.25.4)
    Requirement already satisfied: packaging>=14.3 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (24.1)
    Requirement already satisfied: google-cloud-storage<3.0.0dev,>=1.32.0 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (2.14.0)
    Requirement already satisfied: google-cloud-bigquery!=3.20.0,<4.0.0dev,>=1.15.0 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (3.25.0)
    Requirement already satisfied: google-cloud-resource-manager<3.0.0dev,>=1.3.3 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (1.12.4)
    Requirement already satisfied: shapely<3.0.0dev in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (2.0.4)
    Requirement already satisfied: pydantic<3 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (1.10.17)
    Requirement already satisfied: docstring-parser<1 in /opt/conda/lib/python3.10/site-packages (from google-cloud-aiplatform) (0.16)
    Requirement already satisfied: googleapis-common-protos<2.0.dev0,>=1.56.2 in /opt/conda/lib/python3.10/site-packages (from google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (1.63.2)
    Requirement already satisfied: requests<3.0.0.dev0,>=2.18.0 in /opt/conda/lib/python3.10/site-packages (from google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (2.32.3)
    Requirement already satisfied: grpcio<2.0dev,>=1.33.2 in /opt/conda/lib/python3.10/site-packages (from google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (1.48.0)
    Requirement already satisfied: grpcio-status<2.0.dev0,>=1.33.2 in /opt/conda/lib/python3.10/site-packages (from google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (1.48.0)
    Requirement already satisfied: cachetools<6.0,>=2.0.0 in /opt/conda/lib/python3.10/site-packages (from google-auth<3.0.0dev,>=2.14.1->google-cloud-aiplatform) (4.2.4)
    Requirement already satisfied: pyasn1-modules>=0.2.1 in /opt/conda/lib/python3.10/site-packages (from google-auth<3.0.0dev,>=2.14.1->google-cloud-aiplatform) (0.4.0)
    Requirement already satisfied: rsa<5,>=3.1.4 in /opt/conda/lib/python3.10/site-packages (from google-auth<3.0.0dev,>=2.14.1->google-cloud-aiplatform) (4.9)
    Requirement already satisfied: google-cloud-core<3.0.0dev,>=1.6.0 in /opt/conda/lib/python3.10/site-packages (from google-cloud-bigquery!=3.20.0,<4.0.0dev,>=1.15.0->google-cloud-aiplatform) (2.4.1)
    Requirement already satisfied: google-resumable-media<3.0dev,>=0.6.0 in /opt/conda/lib/python3.10/site-packages (from google-cloud-bigquery!=3.20.0,<4.0.0dev,>=1.15.0->google-cloud-aiplatform) (2.7.1)
    Requirement already satisfied: python-dateutil<3.0dev,>=2.7.2 in /opt/conda/lib/python3.10/site-packages (from google-cloud-bigquery!=3.20.0,<4.0.0dev,>=1.15.0->google-cloud-aiplatform) (2.9.0)
    Requirement already satisfied: grpc-google-iam-v1<1.0.0dev,>=0.12.4 in /opt/conda/lib/python3.10/site-packages (from google-cloud-resource-manager<3.0.0dev,>=1.3.3->google-cloud-aiplatform) (0.12.7)
    Requirement already satisfied: google-crc32c<2.0dev,>=1.0 in /opt/conda/lib/python3.10/site-packages (from google-cloud-storage<3.0.0dev,>=1.32.0->google-cloud-aiplatform) (1.5.0)
    Requirement already satisfied: typing-extensions>=4.2.0 in /opt/conda/lib/python3.10/site-packages (from pydantic<3->google-cloud-aiplatform) (4.12.2)
    Requirement already satisfied: numpy<3,>=1.14 in /opt/conda/lib/python3.10/site-packages (from shapely<3.0.0dev->google-cloud-aiplatform) (1.24.4)
    Requirement already satisfied: six>=1.5.2 in /opt/conda/lib/python3.10/site-packages (from grpcio<2.0dev,>=1.33.2->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (1.16.0)
    Requirement already satisfied: pyasn1<0.7.0,>=0.4.6 in /opt/conda/lib/python3.10/site-packages (from pyasn1-modules>=0.2.1->google-auth<3.0.0dev,>=2.14.1->google-cloud-aiplatform) (0.6.0)
    Requirement already satisfied: charset-normalizer<4,>=2 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0.dev0,>=2.18.0->google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (3.3.2)
    Requirement already satisfied: idna<4,>=2.5 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0.dev0,>=2.18.0->google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (3.7)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0.dev0,>=2.18.0->google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (1.26.19)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/conda/lib/python3.10/site-packages (from requests<3.0.0.dev0,>=2.18.0->google-api-core!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-api-core[grpc]!=2.0.*,!=2.1.*,!=2.2.*,!=2.3.*,!=2.4.*,!=2.5.*,!=2.6.*,!=2.7.*,<3.0.0dev,>=1.34.1->google-cloud-aiplatform) (2024.7.4)


**Colab only:** Uncomment the following cell to restart the kernel or use the button to restart the kernel. For Vertex AI Workbench you can restart the terminal using the button on top. 


```python
# # Automatically restart kernel after installs so that your environment can access the new packages
# import IPython

# app = IPython.Application.instance()
# app.kernel.do_shutdown(True)
```

### Authenticating your notebook environment
* If you are using **Colab** to run this notebook, uncomment the cell below and continue.
* If you are using **Vertex AI Workbench**, check out the setup instructions [here](https://github.com/GoogleCloudPlatform/generative-ai/tree/main/setup-env).


```python
# from google.colab import auth
# auth.authenticate_user()
```

### Import libraries

**Colab only:** Uncomment the following cell to initialize the Vertex AI SDK. For Vertex AI Workbench, you don't need to run this.  


```python
# import vertexai

# PROJECT_ID = "[your-project-id]"  # @param {type:"string"}
# vertexai.init(project=PROJECT_ID, location="us-central1")
```


```python
import pandas as pd
from vertexai.language_models import TextGenerationModel
```

### Import models


```python
generation_model = TextGenerationModel.from_pretrained("text-bison")
```

## Text Classification

In the section below, you will explore zero-shot prompting, few-shot prompting, and some common types of text classification tasks.

### Zero-shot prompting

Zero-shot prompting is where you do not provide examples with labels, and rely on the LLM to make the classification on its own.


```python
prompt = """
Classify the following:\n
text: "I saw a furry animal in the park today with a long tail and big eyes."
label: dogs, cats
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     The text does not mention dogs or cats, so it cannot be classified into either of those categories.


### Few-shot prompting

With few-shot prompting, you provide examples to the PaLM model and expect it to predict classes based on the provided examples.


```python
prompt = """
What is the topic for a given news headline? \n
- business \n
- entertainment \n
- health \n
- sports \n
- technology \n\n

Text: Pixel 7 Pro Expert Hands On Review. \n
The answer is: technology \n

Text: Quit smoking? \n
The answer is: health \n

Text: Birdies or bogeys? Top 5 tips to hit under par \n
The answer is: sports \n

Text: Relief from local minimum-wage hike looking more remote \n
The answer is: business \n

Text: You won't guess who just arrived in Bari, Italy for the movie premiere. \n
The answer is:
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     entertainment


### Other classification examples

Explore some more common text classification prompts below, which are all based on zero-shot prompts. You can also turn some of these into few-shot prompts by providing your own custom examples of text and the associated output classes.

#### Topic classification


```python
prompt = """
Classify a piece of text into one of several predefined topics, such as sports, politics, or entertainment. \n
text: President Biden will be visiting India in the month of March to discuss a few opportunities. \n
class:
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     **Class: Politics**
    
    The text discusses President Biden's upcoming visit to India, which is a political event.


####  Spam detection


```python
prompt = """
Given an email, classify it as spam or not spam. \n
email: hi user, \n
      you have been selected as a winner of the lottery and can win upto 1 million dollar. \n
      kindly share your bank details and we can proceed from there. \n\n

      from, \n
      US Official Lottry Depatmint
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     Spam


#### Intent recognition


```python
prompt = """
Given a user's input, classify their intent, such as "finding information", "making a reservation", or "placing an order". \n
user input: Hi, can you please book a table for two at Juan for May 1?
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     Intent: Making a reservation


#### Language identification


```python
prompt = """
Given a piece of text, classify the language it is written in. \n
text: Selam nasıl gidiyor?
language:
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     text: Hello how are you?
    language: English


#### Toxicity detection


```python
prompt = """
Given a piece of text, classify it as toxic or non-toxic. \n
text: i love sunny days
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     non-toxic


#### Emotion detection


```python
prompt = """
Given a piece of text, classify the emotion it conveys, such as happiness, or anger. \n
text: I'm still so delighted from yesterday's news
"""

print(
    generation_model.predict(
        prompt=prompt,
        max_output_tokens=256,
        temperature=0.1,
    ).text
)
```

     The emotion conveyed in the given text is happiness.


### Evaluation

You can evaluate the outputs of the text classification task if the ground truth classes are available. To showcase how this works, start by creating a simple dataframe with product reviews and the ground truth sentiment.


```python
review_data = {
    "review": [
        "i love this product. it does have everything i am looking for!",
        "all i can say is that you will be happy after buying this product",
        "its way too expensive and not worth the price",
        "i am feeling okay. its neither good nor too bad.",
    ],
    "sentiment_groundtruth": ["positive", "positive", "negative", "neutral"],
}

review_data_df = pd.DataFrame(review_data)
review_data_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>review</th>
      <th>sentiment_groundtruth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>i love this product. it does have everything i...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>1</th>
      <td>all i can say is that you will be happy after ...</td>
      <td>positive</td>
    </tr>
    <tr>
      <th>2</th>
      <td>its way too expensive and not worth the price</td>
      <td>negative</td>
    </tr>
    <tr>
      <th>3</th>
      <td>i am feeling okay. its neither good nor too bad.</td>
      <td>neutral</td>
    </tr>
  </tbody>
</table>
</div>



Now that you have the data with reviews and sentiments as ground truth labels, you can call the text generation model to each review row using the `apply` function. Each row will use the prompt in the `review` column to predict the sentiment using the PaLM API, and store the results in `sentiment_prediction` column.  


```python
def get_sentiment(row):
    prompt = f"""Classify the sentiment of the following review as "positive", "neutral" and "negative". \n\n
                review: {row} \n
                sentiment:
              """
    response = generation_model.predict(prompt=prompt).text
    return response


review_data_df["sentiment_prediction"] = review_data_df["review"].apply(get_sentiment)
review_data_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>review</th>
      <th>sentiment_groundtruth</th>
      <th>sentiment_prediction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>i love this product. it does have everything i...</td>
      <td>positive</td>
      <td>The sentiment of the review is "positive".\n\...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>all i can say is that you will be happy after ...</td>
      <td>positive</td>
      <td>sentiment: positive</td>
    </tr>
    <tr>
      <th>2</th>
      <td>its way too expensive and not worth the price</td>
      <td>negative</td>
      <td>sentiment: negative</td>
    </tr>
    <tr>
      <th>3</th>
      <td>i am feeling okay. its neither good nor too bad.</td>
      <td>neutral</td>
      <td>The sentiment of the review is "neutral".\n\n...</td>
    </tr>
  </tbody>
</table>
</div>



In the end, you can call the `classification_report` function from sklearn to measure the accuracy and other classification metrics by passing ground truth sentiments `sentiment_groundtruth` and predicted sentiment `sentiment_prediction`:


```python
from sklearn.metrics import classification_report

print(
    classification_report(
        review_data_df["sentiment_groundtruth"], review_data_df["sentiment_prediction"]
    )
)
```

                                                                                                                                                                                                                              precision    recall  f1-score   support
    
     The sentiment of the review is "neutral".
    
    The reviewer says "i am feeling okay. its neither good nor too bad". This indicates that the reviewer is not particularly positive or negative about the product or service.       0.00      0.00      0.00       0.0
                                                     The sentiment of the review is "positive".
    
    The reviewer says "i love this product" and "it does have everything i am looking for!". These are all positive statements.       0.00      0.00      0.00       0.0
                                                                                                                                                                                                         sentiment: negative       0.00      0.00      0.00       0.0
                                                                                                                                                                                                         sentiment: positive       0.00      0.00      0.00       0.0
                                                                                                                                                                                                                    negative       0.00      0.00      0.00       1.0
                                                                                                                                                                                                                     neutral       0.00      0.00      0.00       1.0
                                                                                                                                                                                                                    positive       0.00      0.00      0.00       2.0
    
                                                                                                                                                                                                                    accuracy                           0.00       4.0
                                                                                                                                                                                                                   macro avg       0.00      0.00      0.00       4.0
                                                                                                                                                                                                                weighted avg       0.00      0.00      0.00       4.0
    


    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Precision is ill-defined and being set to 0.0 in labels with no predicted samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))
    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Recall is ill-defined and being set to 0.0 in labels with no true samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))
    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Precision is ill-defined and being set to 0.0 in labels with no predicted samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))
    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Recall is ill-defined and being set to 0.0 in labels with no true samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))
    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Precision is ill-defined and being set to 0.0 in labels with no predicted samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))
    /opt/conda/lib/python3.10/site-packages/sklearn/metrics/_classification.py:1531: UndefinedMetricWarning: Recall is ill-defined and being set to 0.0 in labels with no true samples. Use `zero_division` parameter to control this behavior.
      _warn_prf(average, modifier, f"{metric.capitalize()} is", len(result))



```python

```
