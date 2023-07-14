N = int(input())
A = list(map(int, input().split()))

for i in range(1, N):
    print(" ".join([str(a) for a in A]))
    v = A[i]
    j = i - 1
    while j >= 0 and A[j] > v:
        A[j + 1] = A[j]
        j -= 1
    A[j + 1] = v
print(" ".join([str(a) for a in A]))