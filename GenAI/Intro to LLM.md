# Large Language Model


## Objectives

- Define Large Language Models (LLM)
- Describe LLM use cases
- Explain prompt tuning and describe Google's GenAI development tools


## Define Large Language Models LLM

- LLM are the subset of Deep learning.
- LLM and Gen AI are intersect and they are both part of Deep Learning.
- Gen AI is a type of AI that can produce new content including text, image, audio and synthetic data.


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
- Big tech, consumer support, Education, Media, Pharma and healthcare, retail

