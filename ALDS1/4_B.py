n = int(input())
S = list(map(int, input().split()))
q = int(input())
T = list(map(int, input().split()))


def bs(v):
    left = 0
    right = n

    while left < right:
        middle = (left + right) // 2

        if S[middle] == v:
            return 1
        elif S[middle] < v:
            left = middle + 1
        else:
            right = middle

    return 0


c = 0
for i in range(q):
    c += bs(T[i])


print(c)
