n = int(input())
S = list(map(int, input().split()))


def partition(A, p, r):
    x = A[r]
    i = p - 1
    for j in range(p, r):
        if A[j] <= x:
            i += 1
            A[i], A[j] = A[j], A[i]
    A[r] = "[" + str(A[r]) + "]"
    A[i + 1], A[r] = A[r], A[i + 1]
    print(" ".join(map(str, A)))
    return i + 1


partition(S, 0, n - 1)
