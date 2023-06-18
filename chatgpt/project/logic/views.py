from django.shortcuts import render
from django.http import HttpResponse
import openai

def home(request):
    return HttpResponse("Hello, Django!")

replies = []


def resumos_respostas(request):
    if request.method == "POST":
        data = request.POST.dict()
        materia = data.get('materia')
        topicos = data.get('topicos')

        openai.api_key = "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"

        messages = [ {"role": "system", "content": 
              f"Você é um professor de {materia} universitário que fala português."} ]
        replies.append(materia)
        l = len(topicos)
        a = ', '.join(topicos[:l//2])
        for i in range(2):
            if i == 1:
                a = ', '.join(topicos[l//2:])
            messages.append(
                {"role": "user", "content": f"Faça um resumo por tópicos explicando os principais pontos dos seguintes assuntos separados por vírgula, colocando o assunto como título: {a}"},
            )
            chat = openai.ChatCompletion.create(
                model="gpt-3.5-turbo", messages=messages
            )
            reply = chat.choices[0].message.content
            messages.append({"role": "assistant", "content": reply})
            replies.append(reply)
        
        messages = [ {"role": "system", "content": 
                f"Você é um professor de {replies[0]} universitário que fala português."} ]

        messages.append(
            {"role": "user", "content": f": Crie 1 pergunta curta, de complexidade média, com 4 respostas extremamente objetivas separadas em tópicos, 3 erradas e uma certa, e marque a certa como CERTA, com base nos resumos a seguir: {replies}"},
        )
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
        reply = chat.choices[1:].message.content
        messages.append({"role": "assistant", "content": reply})
        return [replies, reply]
