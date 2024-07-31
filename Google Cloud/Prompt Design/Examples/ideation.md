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

# Ideation with Generative Models on Vertex AI

> **NOTE:** This notebook uses the PaLM generative model, which will reach its [discontinuation date in October 2024](https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text#model_versions). Please refer to [this updated notebook](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/prompts/examples/ideation.ipynb) for a version which uses the latest Gemini model.

<table align="left">
  <td style="text-align: center">
    <a href="https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/examples/ideation.ipynb">
      <img src="https://cloud.google.com/ml-engine/images/colab-logo-32px.png" alt="Google Colaboratory logo"><br> Run in Colab
    </a>
  </td>
  <td style="text-align: center">
    <a href="https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/prompts/examples/ideation.ipynb">
      <img src="https://cloud.google.com/ml-engine/images/github-logo-32px.png" alt="GitHub logo"><br> View on GitHub
    </a>
  </td>
  <td style="text-align: center">
    <a href="https://console.cloud.google.com/vertex-ai/workbench/deploy-notebook?download_url=https://raw.githubusercontent.com/GoogleCloudPlatform/generative-ai/main/language/prompts/examples/ideation.ipynb">
      <img src="https://lh3.googleusercontent.com/UiNooY4LUgW_oTvpsNhPpQzsstV5W8F7rYgxgGBD85cWJoLmrOzhVs_ksK_vgx40SHs7jCqkTkCk=e14-rj-sc0xffffff-h130-w32" alt="Vertex AI logo"><br> Open in Vertex AI Workbench
    </a>
  </td>
</table>


| | |
|-|-|
|Author(s) | [Polong Lin](https://github.com/polong-lin) |

## Overview

Ideation is the creative process of generating, developing, and communicating new ideas. It is a key part of the design thinking process, and can be used to solve problems, come up with new products or services, or other creative tasks.

Generative models are a powerful tool that can be used to boost creativity and innovation. By learning how to use them effectively, you can improve your ability to come up with new ideas and solutions to problems. A key part in this is learning how to structure prompts to use generative models for ideation tasks.

Learn more about prompt design in the [official documentation](https://cloud.google.com/vertex-ai/docs/generative-ai/text/text-overview#prompt_structure).

### Objective

In this tutorial, you will learn how to use generative models from the Vertex AI SDK to accelerate the ideation process by working through the following examples:
- Marketing campaign generation
- Creating reading comprehension questions
- Meme generation
- Interview question generation
- Name generation
- General tips and advice
- Generating answers through "impersonation"

### Costs

This tutorial uses billable components of Google Cloud:

* Vertex AI Generative AI Studio

Learn about [Vertex AI pricing](https://cloud.google.com/vertex-ai/pricing),
and use the [Pricing Calculator](https://cloud.google.com/products/calculator/)
to generate a cost estimate based on your projected usage.

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
from vertexai.language_models import TextGenerationModel
```

### Import models


```python
generation_model = TextGenerationModel.from_pretrained("text-bison")
```

## Ideation Examples

### Marketing campaign generation

In this example, our generation example will involve the process of creating new cookie recipes. Let's see how this can be done using the PaLM API.


```python
prompt = "Generate a marketing campaign for sustainability and fashion"

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=1024, top_k=40, top_p=0.8
    ).text
)
```

     **Campaign Name:** "Fashion Forward: Sustainable Style"
    
    **Target Audience:** Millennials and Gen Z consumers who are interested in fashion and sustainability.
    
    **Campaign Goals:**
    
    * Increase awareness of the environmental impact of the fashion industry.
    * Educate consumers about sustainable fashion options.
    * Encourage consumers to make more sustainable fashion choices.
    
    **Campaign Strategies:**
    
    * Partner with sustainable fashion brands to create a collection of eco-friendly clothing and accessories.
    * Host pop-up shops and events to showcase the collection and educate consumers about sustainable fashion.
    * Create a social media campaign to share information about sustainable fashion and encourage consumers to make more sustainable choices.
    * Partner with influencers and celebrities to promote the campaign and reach a wider audience.
    
    **Campaign Timeline:**
    
    * The campaign will run for six months, from March to August.
    * The pop-up shops and events will be held in major cities across the country.
    * The social media campaign will run throughout the six-month period.
    
    **Campaign Budget:**
    
    * The total budget for the campaign is $500,000.
    * The budget will be allocated as follows:
        * Product development: $200,000
        * Marketing and advertising: $150,000
        * Pop-up shops and events: $100,000
        * Influencer and celebrity partnerships: $50,000
    
    **Campaign Evaluation:**
    
    * The success of the campaign will be evaluated based on the following metrics:
        * Sales of the sustainable fashion collection
        * Website traffic and social media engagement
        * Number of pop-up shop and event attendees
        * Media coverage
    
    **Conclusion:**
    
    The "Fashion Forward: Sustainable Style" campaign is a comprehensive marketing campaign that aims to increase awareness of the environmental impact of the fashion industry, educate consumers about sustainable fashion options, and encourage consumers to make more sustainable fashion choices. The campaign will be executed through a variety of channels, including pop-up shops and events, social media, and influencer and celebrity partnerships. The success of the campaign will be evaluated based on a variety of metrics, including sales of the sustainable fashion collection, website traffic and social media engagement, number of pop-up shop and event attendees, and media coverage.


### Creating reading comprehension questions

Reading comprehension tests are often used in schools and universities to assess a student's reading skills. You can use the PaLM API to generate some example questions to test a person's understanding of a provided passage of text.


```python
prompt = """
Generate 5 questions that test a reader's comprehension of the following text.

Text:
The Amazon rainforest, also called Amazon jungle or Amazonia, is a moist broadleaf tropical rainforest in the Amazon biome that covers most of the Amazon basin of South America. This basin encompasses 7,000,000 km2 (2,700,000 sq mi), of which 5,500,000 km2 (2,100,000 sq mi) are covered by the rainforest. This region includes territory belonging to nine nations and 3,344 formally acknowledged indigenous territories.

The majority of the forest, 60%, is in Brazil, followed by Peru with 13%, Colombia with 10%, and with minor amounts in Bolivia, Ecuador, French Guiana, Guyana, Suriname, and Venezuela. Four nations have "Amazonas" as the name of one of their first-level administrative regions, and France uses the name "Guiana Amazonian Park" for French Guiana's protected rainforest area. The Amazon represents over half of the planet's remaining rainforests, and comprises the largest and most biodiverse tract of tropical rainforest in the world, with an estimated 390 billion individual trees in about 16,000 species.

More than 30 million people of 350 different ethnic groups live in the Amazon, which are subdivided into 9 different national political systems and 3,344 formally acknowledged indigenous territories. Indigenous peoples make up 9% of the total population, and 60 of the groups remain largely isolated.

The rainforest likely formed during the Eocene era (from 56 million years to 33.9 million years ago). It appeared following a global reduction of tropical temperatures when the Atlantic Ocean had widened sufficiently to provide a warm, moist climate to the Amazon basin. The rainforest has been in existence for at least 55 million years, and most of the region remained free of savanna-type biomes at least until the current ice age when the climate was drier and savanna more widespread.

Following the Cretaceous–Paleogene extinction event, the extinction of the dinosaurs and the wetter climate may have allowed the tropical rainforest to spread out across the continent. From 66 to 34 Mya, the rainforest extended as far south as 45°. Climate fluctuations during the last 34 million years have allowed savanna regions to expand into the tropics. During the Oligocene, for example, the rainforest spanned a relatively narrow band. It expanded again during the Middle Miocene, then retracted to a mostly inland formation at the last glacial maximum. However, the rainforest still managed to thrive during these glacial periods, allowing for the survival and evolution of a broad diversity of species.

Aerial view of the Amazon rainforest
During the mid-Eocene, it is believed that the drainage basin of the Amazon was split along the middle of the continent by the Púrus Arch. Water on the eastern side flowed toward the Atlantic, while to the west water flowed toward the Pacific across the Amazonas Basin. As the Andes Mountains rose, however, a large basin was created that enclosed a lake; now known as the Solimões Basin. Within the last 5–10 million years, this accumulating water broke through the Púrus Arch, joining the easterly flow toward the Atlantic.

There is evidence that there have been significant changes in the Amazon rainforest vegetation over the last 21,000 years through the last glacial maximum (LGM) and subsequent deglaciation. Analyses of sediment deposits from Amazon basin paleolakes and the Amazon Fan indicate that rainfall in the basin during the LGM was lower than for the present, and this was almost certainly associated with reduced moist tropical vegetation cover in the basin. In present day, the Amazon receives approximately 9 feet of rainfall annually. There is a debate, however, over how extensive this reduction was. Some scientists argue that the rainforest was reduced to small, isolated refugia separated by open forest and grassland; other scientists argue that the rainforest remained largely intact but extended less far to the north, south, and east than is seen today. This debate has proved difficult to resolve because the practical limitations of working in the rainforest mean that data sampling is biased away from the center of the Amazon basin, and both explanations are reasonably well supported by the available data.

Sahara Desert dust windblown to the Amazon
More than 56% of the dust fertilizing the Amazon rainforest comes from the Bodélé depression in Northern Chad in the Sahara desert. The dust contains phosphorus, important for plant growth. The yearly Sahara dust replaces the equivalent amount of phosphorus washed away yearly in Amazon soil from rains and floods.

NASA's CALIPSO satellite has measured the amount of dust transported by wind from the Sahara to the Amazon: an average of 182 million tons of dust are windblown out of the Sahara each year, at 15 degrees west longitude, across 2,600 km (1,600 mi) over the Atlantic Ocean (some dust falls into the Atlantic), then at 35 degrees West longitude at the eastern coast of South America, 27.7 million tons (15%) of dust fall over the Amazon basin (22 million tons of it consisting of phosphorus), 132 million tons of dust remain in the air, 43 million tons of dust are windblown and falls on the Caribbean Sea, past 75 degrees west longitude.

CALIPSO uses a laser range finder to scan the Earth's atmosphere for the vertical distribution of dust and other aerosols. CALIPSO regularly tracks the Sahara-Amazon dust plume. CALIPSO has measured variations in the dust amounts transported – an 86 percent drop between the highest amount of dust transported in 2007 and the lowest in 2011.
A possibility causing the variation is the Sahel, a strip of semi-arid land on the southern border of the Sahara. When rain amounts in the Sahel are higher, the volume of dust is lower. The higher rainfall could make more vegetation grow in the Sahel, leaving less sand exposed to winds to blow away.[25]

Amazon phosphorus also comes as smoke due to biomass burning in Africa.

Questions:
"""

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=1024, top_k=40, top_p=0.8
    ).text
)
```

     1. What percentage of the Amazon rainforest is located in Brazil?
    2. How many indigenous territories are there in the Amazon rainforest?
    3. What is the estimated number of individual trees in the Amazon rainforest?
    4. What is the name of the satellite that measures the amount of dust transported by wind from the Sahara to the Amazon?
    5. What is the name of the region in Africa that is a source of phosphorus for the Amazon rainforest?


### Meme generation

A more lighthearted text generation example is to generate memes based on a certain topic.


```python
prompt = "Give me 5 dog meme ideas:"

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=1024, top_k=1, top_p=0.8
    ).text
)
```

     **1.** A dog sitting in a bathtub, looking very sad, with the caption "When you realize you're not a water dog."
    
    **2.** A dog sitting on a couch, looking very smug, with the caption "When you know you're the goodest boy."
    
    **3.** A dog running through a field, chasing a ball, with the caption "When you're chasing your dreams."
    
    **4.** A dog sitting on a person's lap, looking very content, with the caption "When you find your favorite spot."
    
    **5.** A dog sitting in a car, looking very excited, with the caption "When you're going on a road trip."


### Interview question generation

Whether you are the interviewer or interviewee, having some sample interview questions you can work with can be very helpful in job interviews. Below we use the PaLM API to help us generate some potential interview questions for a particular role.


```python
prompt = "Give me ten interview questions for the role of prompt engineer."

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=256, top_k=1, top_p=0.8
    ).text
)
```

     **1.** What do you understand by the term "prompt engineering"?
    
    **2.** What are the different types of prompts that can be used in language models?
    
    **3.** How do you go about crafting effective prompts for a given task?
    
    **4.** What are some of the challenges and limitations of prompt engineering?
    
    **5.** How do you measure the success of a prompt?
    
    **6.** What are some of the best practices for prompt engineering?
    
    **7.** How do you stay up-to-date with the latest developments in prompt engineering?
    
    **8.** What are some of the ethical considerations that need to be taken into account when using prompt engineering?
    
    **9.** How do you handle situations where a prompt results in harmful or offensive output?
    
    **10.** What are your thoughts on the future of prompt engineering?


### Name generation

Name generation is useful in a variety of scenarios, such as creating new characters for a story or naming a new product or company. You can generate ideas for names of a specified entity using the PaLM API.


```python
prompt = "What's a good name for a flower shop that specializes in selling bouquets of dried flowers?"

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=256, top_k=1, top_p=0.8
    ).text
)
```

     * Everlasting Blooms
    * The Dried Flower Studio
    * The Pressed Petal
    * Forever Flowers
    * Nature's Treasures
    * The Flower Vault
    * The Dried Flower Gallery
    * The Flower Archive
    * The Botanical Treasury
    * The Floral Conservatory


### General tips and advice

Below is an example of using the PaLM API to get tips and advice on general topics.


```python
prompt = "What are some strategies for overcoming writer's block?"

print(
    generation_model.predict(
        prompt, temperature=0.2, max_output_tokens=1024, top_k=1, top_p=0.8
    ).text
)
```

     Overcoming writer's block requires a combination of techniques and mindset shifts. Here are some strategies to help you break through creative barriers:
    
    **1. Free Writing:**
    - Start by writing without any inhibitions or self-judgment. Let your thoughts flow freely onto the page.
    
    **2. Change of Environment:**
    - Move to a different location, such as a park, coffee shop, or library. A change of scenery can stimulate your creativity.
    
    **3. Mind Mapping:**
    - Create a visual representation of your ideas and their connections. This can help you organize your thoughts and identify potential paths forward.
    
    **4. Prompts and Exercises:**
    - Use writing prompts or exercises to spark your imagination. There are many resources available online and in books.
    
    **5. Timed Writing:**
    - Set a timer for a specific amount of time (e.g., 15 minutes) and write continuously without stopping. This can help you overcome the fear of the blank page.
    
    **6. Reading and Research:**
    - Immerse yourself in reading related to your topic. New information can inspire fresh ideas.
    
    **7. Brainstorming:**
    - Generate a list of ideas, even if they seem unrelated at first. Sometimes, unexpected connections can lead to breakthroughs.
    
    **8. Take Breaks:**
    - Step away from your writing for a while. Go for a walk, do some physical activity, or engage in a relaxing hobby.
    
    **9. Talk It Out:**
    - Discuss your ideas with a friend, colleague, or writing group. Sometimes, verbalizing your thoughts can help you gain clarity.
    
    **10. Set Realistic Goals:**
    - Break your writing project into smaller, manageable goals. This can make the task feel less daunting.
    
    **11. Embrace Imperfection:**
    - Remember that your first draft doesn't have to be perfect. You can always revise and edit later.
    
    **12. Visualize Success:**
    - Imagine yourself completing your writing project and feeling a sense of accomplishment. Visualization can boost your motivation.
    
    **13. Seek Feedback:**
    - Share your work with others and ask for constructive feedback. This can help you identify areas for improvement.
    
    **14. Practice Self-Compassion:**
    - Be kind to yourself and acknowledge that writer's block is a common experience. Don't let it discourage you.
    
    **15. Celebrate Progress:**
    - Acknowledge and celebrate even small achievements. This positive reinforcement can help you stay motivated.
    
    Remember that writer's block is temporary, and with persistence and the right strategies, you can overcome it and get back to creating.


### Generating answers through "impersonation"

Below is an example for using PaLM API to impersonating a pirate.


```python
prompt = """You are a pirate. Take the following sentence and rephrase it as a pirate.
'Learn as if you will live forever, live like you will die tomorrow.' 
"""

print(
    generation_model.predict(
        prompt, temperature=0.8, max_output_tokens=1024, top_k=40, top_p=0.8
    ).text
)
```


```python

```
