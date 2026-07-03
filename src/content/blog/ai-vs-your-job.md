---
title: "AI vs Your Job: The Roles Already Being Replaced, What the Data Says and What You Can Do"
date: 2025-08-01
category: AI
readTime: 9
excerpt: "A Microsoft-backed study listed the top 40 jobs AI is already doing large parts of. What the data actually says, where it's wrong, and how to position yourself."
cover: /lovable-uploads/Blog.jpeg
canonical: https://amoodaniel.medium.com/
canonicalLabel: Read the original on Medium
featured: true
---

A recent Microsoft-backed study listed the top 40 jobs AI is already performing a large part of. The headlines wrote themselves — but the dataset underneath is more interesting, and less apocalyptic, than the coverage suggests.

## What the study measured

The researchers matched millions of anonymized AI-assistant conversations against occupational task descriptions. The metric isn't "can AI do your job" — it's overlap between what people ask AI to do and what a role's tasks look like on paper. That distinction changes how you should read every ranking in the report.

## Reading the data yourself

The underlying occupation data is public. A few lines of pandas gets you from headline to evidence:

```python overlap_analysis.py
import pandas as pd

df = pd.read_csv("occupation_overlap.csv")
# overlap score != automation risk
top = df.sort_values("ai_overlap", ascending=False).head(40)
top.groupby("category")["ai_overlap"].mean()
```

Group the top 40 by category and the pattern is immediate: information-processing roles cluster at the top, physical and relational roles at the bottom. No surprises — but now it's your analysis, not a headline.

> The question isn't whether AI overlaps with your tasks. It's whether you're the person who directs that overlap, or the person directed by it.

## What you can do

Three moves hold up across every category in the data: own the judgment layer of your role, learn to supervise AI output in your domain, and build evidence of both. The rest of this piece walks through each.

*The full analysis lives in the original piece — [read it on Medium](https://amoodaniel.medium.com/).*
