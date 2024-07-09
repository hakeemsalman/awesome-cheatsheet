# Large Language Model


## Objectives

- Define Large Language Models (LLM)
- Describe LLM use cases
- Explain prompt tuning and describe Google's GenAI development tools


## Define Large Language Models LLM

- LLM are the subset of Deep learning.
- LLM and Gen AI are intersect and they are both part of Deep Learning.
- Gen AI is a type of AI that can produce new content including text, image, audio and synthetic data.
- An LLM is a type of artificial intelligence (AI) that can generate human-quality text. LLMs are trained on massive datasets of text and code, and they can be used for many tasks, such as writing, translating, and coding.


**What are Large Language Models?** 
 Large Language Models refer to large, general-purpose language models that can be *pre-trained* and the *fine-tuned* for specific purposes.


Sure! Let's break down the concepts of "pre-trained" and "fine-tuned" models in simple terms, and provide an example for each.

### Pre-trained Models

**Definition**: Pre-trained models are machine learning models that have been previously trained on a large, general dataset. They have learned a wide range of patterns, knowledge, and language structures from this extensive training.

**Purpose**: The idea is to leverage the general knowledge acquired during this training so that the model doesn't have to learn from scratch for every new task.

**Example**: 
- **BERT (Bidirectional Encoder Representations from Transformers)**: BERT is pre-trained on a massive dataset containing parts of the internet, books, and articles. During this training, BERT learns to understand the context and relationships between words in a language.

### Fine-tuned Models

**Definition**: Fine-tuning is the process of taking a pre-trained model and further training it on a smaller, task-specific dataset. This helps the model adapt its general knowledge to perform well on a specific task.

**Purpose**: This process allows the model to specialize and improve its performance on a particular application without needing an extensive amount of task-specific data.

**Example**:
- **Fine-tuning BERT for Sentiment Analysis**: Suppose we want BERT to analyze customer reviews and determine if they are positive or negative. We take the pre-trained BERT model and further train it on a labeled dataset of customer reviews. This helps BERT understand the nuances of positive and negative sentiments in the context of customer feedback.

### Simple Explanation

1. **Pre-trained Model**: Think of it like a student who has completed a general education. They have a broad understanding of many subjects.
2. **Fine-tuned Model**: Now, the student takes a specialized course to become an expert in a specific field, like medicine or law, using the foundational knowledge they already have.

### Example Walkthrough

- **Pre-trained BERT**: The BERT model is trained on a large, diverse set of texts from the internet. It learns general language skills, such as grammar, word meanings, and context.
- **Fine-tuning BERT for Sentiment Analysis**:
  - Step 1: We start with the pre-trained BERT model.
  - Step 2: We provide it with a dataset of customer reviews labeled as positive or negative.
  - Step 3: We train (fine-tune) BERT on this dataset. It adjusts its parameters to learn the specific task of identifying sentiment in reviews.

After fine-tuning, BERT can take a new customer review and accurately predict whether the sentiment expressed is positive or negative.

This approach of pre-training and fine-tuning leverages the strengths of both general-purpose understanding and task-specific expertise, making large language models very powerful and versatile.

### Three Major Features of LLM

1. **Large** (further it has two meanings)
   1. Large training dataset
   2. Large number of parameters, sometimes parameters called *hyper-parameters*.
      1. Parameters are basically memories and the knowledge the machine learned from the model. Such as predicting text.
2. **General Purpose** - When the model are sufficient to solve common problems
   1. Commonality of human languages regardless of the specific tasks
   2. Resource restrictions
3. **Pre-trained & Fine-tuned**
   1. **Pre-trained**: A LLM for a general purpose with a large dataset
   2. **Fine-tuned**: With specific aims with a much smaller dataset


### Use case of LLM

1. A single model can be used for different tasks.
2. LLM require minimal field of training data when you trailor them to solve your specific problem.
   1. Then can be used for few-shor or zero-shot scenarios.
      1. In Machine Learning Few-shot refers to training a model with minimal data
      2. Zero-shot: A model can recognize things that have not explicitly been taught in the training before.
3. Performance of Large Language models is continuously growing, when you add more *Data* and *parameters*
   1. **Example:** PaLM 2 - Pathways Language Model
      1.  540 billion parameters with large training dataset
      2.  It is the only dense decoder only Transformer model.

- Generative Language models: LaMDA, PaLM, GPT, etc...

#### LLM development vs tradional ML development

1. LLM development (using pre-trained APIs)
   1. No ML expertise needed.
   2. No training examples.
   3. No need to train a model.
   4. Thinks about prompt design.
      1. Which is process of creating a prompt that is clear, concise and informative. It is important part of Natural Language Processing (NLP).
2. Traditional ML development
   1. Yes ML expertise needed
   2. Yes training examples.
   3. Yes need to train a model
   4. Thinks about minimizing a loss function.
   

#### What is Question Answering in NLP?
- **QA** is subfield of NLP that deals with the task of automatically answering question posed in natural language.
- **QA** systems are able to answer a wide range of questions, including factual, definitional and opinio-based questions.

**Question Answering - required domain knowledge**
- Big tech, consumer support, Education, Media, Pharma and healthcare, retail, supply chain etc.

#### Prompt design vs Prompt engineering

- **Prompt design** is the process of creating a prompt that is tailored to the specific task that the system is being asked to perform.
- **Prompt engineering** is the process of creating a prompt that is designed to improve performance.


### Three type of Large Language Model
1. Generic Language model
   1. Predict the next word(technically, token) based on the language in the training data.
   - ![gen word predictor](./assets/gen%20LM%20word%20predictor.png)
1. Instruction tuned
   1. Trained to predict a response to the instructions given in the input.
   -  ![alt text](./assets/instruction%20tuned%20LM.png)
2. Dialogue Tuned model
   1. Trained have a dialog by predicting the next response.
   - Dialog-tuned models are a special case of instruction tuned where requests are typically framed as a question to a chat bot. 
   - Dialog tuning is a further specialization of instruction tuning that is expected to be in the context of a longer back-and-forth conversation, and typically works better with natural question-like phrasings.


- **Chain-of-thought reasoning** - Models are better at getting the right answer when they first output test that explains the reason for the answer.

- **Model Garden task-specific models**
  - ![sentiment%20analysis](./assets/sentiment%20analysis.png)
  - ![occupancy analysis](./assets/occupancy%20analysis.png)

1. Fined tuning requers more consumption model and very expensive
   - **More efficient methods of tuning**
     1. **Parameter-efficient tuning methods (PETV)**
        1. Methods for tuning an LLM on your own custom data without duplicating the model
     2. **Prompt tuning** 
        1. One of the easiest parameter-effecient tuning methods


- Gen AI - Vertex AI Studio
  - Quickly explore and customize GenAI models.
  - Developers create and deploy the GenAI models and tools

-  Features of Vertex AI studio
   -  Library of pre-trained models
   -  Tool for fine-tuning models
   -  Tool for deploying models to production
   -  Community forum for developers to share ideas and collaborate


#### References

**Assembled readings on large language models:**
- Introduction to Large Language Models
   - https://developers.google.com/machine-learning/resources/intro-llms
- Language Models are Few-Shot Learners:
   -  https://proceedings.neurips.cc/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64aPaper.pdf
- Getting Started with LangChain + Vertex AI PaLM API
   -  https://github.com/GoogleCloudPlatform/generative-ai/blob/main/language/orchestration/langchain/intro_langchain_palm_api.ipynb
- Learn about LLMs, PaLM models, and Vertex AI
   -  https://cloud.google.com/vertex-ai/docs/generative-ai/learn-resources
- Building AI-powered apps on Google Cloud databases using pgvector, LLMs and LangChain
   - https://cloud.google.com/blog/products/databases/using-pgvector-llms-and-langchain-with-google-cloud-databases
- Training Large Language Models on Google Cloud
   -  https://github.com/GoogleCloudPlatform/llm-pipeline-examples
- Prompt Engineering for Generative AI
   -  https://developers.google.com/machine-learning/resources/prompt-eng
- PaLM-E: An embodied multimodal language model:
   -  https://ai.googleblog.com/2023/03/palm-e-embodied-multimodal-language.html
- Parameter-efficient fine-tuning of large-scale pre-trained language models
   -  https://www.nature.com/articles/s42256-023-00626-4
- Parameter-Efficient Fine-Tuning of Large Language Models with LoRA and QLoRA
   -  https://www.analyticsvidhya.com/blog/2023/08/lora-and-qlora/
- Solving a machine-learning mystery:
   -  https://news.mit.edu/2023/large-language-models-in-context-learning-0207

**Assembled readings on generative AI:**
- Background: What is a Generative Model?
   - https://developers.google.com/machine-learning/gan/generative
- Gen AI for Developers
   - https://cloud.google.com/ai/generative-ai?hl=en#developer-resources
- Ask a Techspert: What is generative AI?
   - https://blog.google/inside-google/googlers/ask-a-techspert/what-is-generative-ai/
- What is generative AI?
   - https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generativeai
- Building the most open and innovative AI ecosystem:
   - https://cloud.google.com/blog/products/ai-machine-learning/building-an-open-gener
ative-ai-partner-ecosystem
- Generative AI is here. Who Should Control It?
   - https://www.nytimes.com/2022/10/21/podcasts/hard-fork-generative-artificial-intelligence.html
- Stanford U & Google’s Generative Agents Produce Believable Proxies of Human Behaviors:
   - https://syncedreview.com/2023/04/12/stanford-u-googles-generative-agents-produce-believable-proxies-of-human-behaviours/
- Generative AI: Perspectives from Stanford HAI:
   - https://hai.stanford.edu/sites/default/files/2023-03/Generative_AI_HAI_Perspectives.pdf
- Generative AI at Work:
   - https://www.nber.org/system/files/working_papers/w31161/w31161.pdf
- The future of generative AI is niche, not generalized:
   - https://www.technologyreview.com/2023/04/27/1072102/the-future-of-generative-ai-is-niche-not-generalized/
- The implications of Generative AI for businesses:
   - https://www2.deloitte.com/us/en/pages/consulting/articles/generative-artificial-intelligence.html
- Proactive Risk Management in Generative AI:
   - https://www2.deloitte.com/us/en/pages/consulting/articles/responsible-use-of-generative-ai.html
- How Generative AI Is Changing Creative Work:
   - https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work

**Additional Resources:**
- Attention is All You Need: 
  - https://research.google/pubs/pub46201/
- Transformer: A Novel Neural Network Architecture for Language Understanding:
  - https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html
- Transformer on Wikipedia:
  - https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)#:~:text=Transformers%20were%20introduced%20in%202017,allowing%20training%20on%20larger%20datasets
- What is Temperature in NLP?
  - https://lukesalamone.github.io/posts/what-is-temperature/
- Model Garden:
  - https://cloud.google.com/model-garden
- Auto-generated Summaries in Google Docs:
  - https://ai.googleblog.com/2022/03/auto-generated-summaries-in-google-docs.html