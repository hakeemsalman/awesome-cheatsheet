# Prompt engineering best practices

Prompt engineering is all about how to design your prompts so that the response is what you were indeed hoping to see.

> The idea of using "unfancy" prompts is to minimize the noise in your prompt to reduce the possibility of the LLM misinterpreting the intent of the prompt. Below are a few guidelines on how to engineer "unfancy" prompts.

In this section, you'll cover the following best practices when engineering prompts:
------
1. Be concise
1. Be specific, and well-defined
1. Ask one task at a time
1. Improve response quality by including examples
1. Turn generative tasks to classification tasks to improve safety

## 1. Be concise

```py
# Not Recommended
prompt = "What do you think could be a good name for a flower shop that specializes in selling bouquets of dried flowers more than fresh flowers? Thank you!"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)

# Recommended
prompt = "Suggest a name for a flower shop that sells bouquets of dried flowers"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```


## 2. Be specific, and well-defined

Suppose that you want to brainstorm creative ways to describe Earth.

```py
# Not Rec.
prompt = "Tell me about Earth"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)

# Rec.
prompt = "Generate a list of ways that makes Earth unique compared to other planets"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)

```

## 3. Ask one task at a time

```py
# NR
prompt = "What's the best method of boiling water and why is the sky blue?"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)

# Rec.
prompt = "What's the best method of boiling water?"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)

prompt = "Why is the sky blue?"
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```

### Watch out for hallucinations

Although LLMs have been trained on a large amount of data, they can generate text containing statements not grounded in truth or reality; these responses from the LLM are often referred to as "hallucinations" due to their limited memorization capabilities. Note that simply prompting the LLM to provide a citation isn't a fix to this problem, as there are instances of LLMs providing false or inaccurate citations. Dealing with hallucinations is a fundamental challenge of LLMs and an ongoing research area, so it is important to be cognizant that LLMs may seem to give you confident, correct-sounding statements that are in fact incorrect. 

Note that if you intend to use LLMs for the creative use cases, hallucinating could actually be quite useful.

Clearly the chatbot is hallucinating since no elephant has ever flown to the moon. But how do we prevent these kinds of inappropriate questions and more specifically, reduce hallucinations?

There is one possible method called the Determine Appropriate Response (DARE) prompt, which cleverly uses the LLM itself to decide whether it should answer a question based on what its mission is.

Let's see how it works by creating a chatbot for a travel website with a slight twist.

```py
chat_model = ChatModel.from_pretrained("chat-bison@002")

chat = chat_model.start_chat()
dare_prompt = """Remember that before you answer a question, you must check to see if it complies with your mission.
If not, you can say, Sorry I can't answer that question."""

print(
    chat.send_message(
        f"""
Hello! You are an AI chatbot for a travel web site.
Your mission is to provide helpful queries for travelers.

{dare_prompt}
"""
    )
)
```

**Q. Suppose we ask a simple question about one of Italy's most famous tourist spots.**

```py
prompt = "What is the best place for sightseeing in Milan, Italy?"
print(chat.send_message(prompt))
```

**Q. Now let us pretend to be a not-so-nice user and ask the chatbot a question that is unrelated to travel.**

```py
prompt = "Who was the first elephant to visit the moon?"
print(chat.send_message(prompt))
```
## Turn generative tasks into classification tasks to reduce output variability

### Generative tasks lead to higher output variability

The prompt below results in an open-ended response, useful for brainstorming, but response is highly variable.

```py
prompt = "Who was the first elephant to visit the moon?"
print(chat.send_message(prompt))
```

### Classification tasks reduces output variability

The prompt below results in a choice and may be useful if you want the output to be easier to control.

```py
prompt = """I'm a high school student. Which of these activities do you suggest and why:
a) learn Python
b) learn JavaScript
c) learn Fortran
"""

print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```

## Improve response quality by including examples

Another way to improve response quality is to add examples in your prompt. The LLM learns in-context from the examples on how to respond. Typically, one to five examples (shots) are enough to improve the quality of responses. Including too many examples can cause the model to over-fit the data and reduce the quality of responses.

Similar to classical model training, the quality and distribution of the examples is very important. Pick examples that are representative of the scenarios that you need the model to learn, and keep the distribution of the examples (e.g. number of examples per class in the case of classification) aligned with your actual distribution.

### Zero-shot prompt

Below is an example of zero-shot prompting, where you don't provide any examples to the LLM within the prompt itself.

```py
prompt = """Decide whether a Tweet's sentiment is positive, neutral, or negative.

Tweet: I loved the new YouTube video you made!
Sentiment:
"""

print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```

### One-shot prompt

Below is an example of one-shot prompting, where you provide one example to the LLM within the prompt to give some guidance on what type of response you want.

```py
prompt = """Decide whether a Tweet's sentiment is positive, neutral, or negative.
​
Tweet: I loved the new YouTube video you made!
Sentiment: positive
​
Tweet: That was awful. Super boring 😠
Sentiment:
"""
​
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```

### Few-shot prompt

Below is an example of few-shot prompting, where you provide a few examples to the LLM within the prompt to give some guidance on what type of response you want.

```py
prompt = """Decide whether a Tweet's sentiment is positive, neutral, or negative.
​
Tweet: I loved the new YouTube video you made!
Sentiment: positive
​
Tweet: That was awful. Super boring 😠
Sentiment: negative
​
Tweet: Something surprised me about this video - it was actually original. It was not the same old recycled stuff that I always see. Watch it - you will not regret it.
Sentiment:
"""
​
print(generation_model.predict(prompt=prompt, max_output_tokens=256).text)
```












