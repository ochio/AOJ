N = int(input())
A = list(map(int, input().split()))

c = 0
for i in range(N):
    minj = i
    for j in range(i, N):
        if A[j] < A[minj]:
            minj = j
    if minj != i:
        A[i], A[minj] = A[minj], A[i]
        c += 1

print(" ".join([str(a) for a in A]))
print(c)
