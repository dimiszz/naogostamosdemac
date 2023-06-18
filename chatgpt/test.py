topicos = ['a', 'b', 'c', 'd', 'e', 'f']
a = len(topicos)


temp = ', '.join(topicos[:a//2])

for i in range(2):
    if i == 1:
        temp = ', '.join(topicos[a//2:])
    print(temp)
