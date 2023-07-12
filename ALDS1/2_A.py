N = int(input())
A = list(map(int, input().split()))

flag = 1
c = 0
while flag:
    flag = 0
    for j in range(N - 1, 0, -1):
        if A[j] < A[j - 1]:
            c += 1
            A[j], A[j - 1] = A[j - 1], A[j]
            flag = 1

print(" ".join([str(a) for a in A]))
print(c)
