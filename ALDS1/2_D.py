# TODO: 解き直す
N = int(input())
A = []

for _ in range(N):
    A.append(int(input()))


def insertionSort(A, n, g):
    for i in range(g, n):
        v = A[i]
        j = i - g
        while j >= 0 and A[j] > v:
            A[j + g] = A[j]
            j = j - g
        A[j + g] = v


def shellSort(A, n):
    cnt = 0
    m = len(A)
    G = [len(A) - i for i in range(len(A))]
    for i in range(m):
        insertionSort(A, n, G[i])


shellSort(A, N)
