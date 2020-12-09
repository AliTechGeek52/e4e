# E4E

# Chatbot
Right now the bot has two intents.
1. Intro
2. Lesson

If you ask about the functionality of app, or what is this capplication about, it detects the ```intro``` intent, however when you ask the bot to open any ```chapter``` of a certain ```subject``` of a certain ```class```(grade), it is able to detect ```lesson``` intent with ```subject```, class and ```chapter``` number as an entity.

[Click here to checkout detailed documentation in postman](https://documenter.getpostman.com/view/10491405/TVmTaZBn)

For user query = ```براہ کرم پانچویں جماعت کے اسلامیات کا پہلا باب کھولیں```
the response is

```{
    "text": "براہ کرم پانچویں جماعت کے اسلامیات کا پہلا باب کھولیں",
    "intents": [
        {
            "id": "680708539259936",
            "name": "lesson",
            "confidence": 0.9995
        }
    ],
    "entities": {
        "chap:chap": [
            {
                "id": "416998306151215",
                "name": "chap",
                "role": "chap",
                "start": 38,
                "end": 42,
                "body": "پہلا",
                "confidence": 0.9919,
                "entities": [],
                "value": "پہلا",
                "type": "value"
            }
        ],
        "sub:sub": [
            {
                "id": "758951058298102",
                "name": "sub",
                "role": "sub",
                "start": 26,
                "end": 34,
                "body": "اسلامیات",
                "confidence": 0.9927,
                "entities": [],
                "value": "اسلامیات",
                "type": "value"
            }
        ],
        "class:class": [
            {
                "id": "665386327477421",
                "name": "class",
                "role": "class",
                "start": 9,
                "end": 16,
                "body": "پانچویں",
                "confidence": 0.986,
                "entities": [],
                "value": "پانچویں",
                "type": "value"
            }
        ]
    },
    "traits": {}
}```
