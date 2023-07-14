input = input().split()
stack = []
for i in range(len(input)):
    if input[i] == "+":
        tmp = stack.pop() + stack.pop()
    elif input[i] == "-":
        tmp = -1 * stack.pop() + stack.pop()
    elif input[i] == "*":
        tmp = stack.pop() * stack.pop()
    else:
        tmp = int(input[i])
    stack.append(tmp)

print(stack[0])
