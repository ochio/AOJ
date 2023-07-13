N = int(input())
A = input()


def bubblesort(A):
    C = list(A.split())
    for i in range(N):
        for j in range(N - 1, i, -1):
            if C[j][1] < C[j - 1][1]:
                C[j], C[j - 1] = C[j - 1], C[j]
    o = " ".join(C)
    print(o)
    print("Stable")
    return o


def selectionsort(A, b):
    C = list(A.split())
    for i in range(N):
        minj = i
        for j in range(i, N):
            if C[j][1] < C[minj][1]:
                minj = j
        C[i], C[minj] = C[minj], C[i]
    o = " ".join(C)
    print(" ".join(C))
    print("Stable" if b == " ".join(C) else "Not stable")


selectionsort(A, bubblesort(A))
