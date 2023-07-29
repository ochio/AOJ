n = int(input())
S = list(map(int, input().split()))
d = {"count": 0}


def merge(A, left, mid, right):
    n1 = mid - left
    n2 = right - mid
    L = [0] * (n1 + 1)
    R = [0] * (n2 + 1)

    for i in range(n1):
        L[i] = A[left + i]

    for i in range(n2):
        R[i] = A[mid + i]
    L[n1] = float("inf")
    R[n2] = float("inf")
    i = 0
    j = 0
    for k in range(left, right):
        if L[i] <= R[j]:
            A[k] = L[i]
            i += 1
        else:
            A[k] = R[j]
            j += 1
        d["count"] += 1


def mergeSort(A, left, right):
    if left + 1 < right:
        mid = (left + right) // 2
        mergeSort(A, left, mid)
        mergeSort(A, mid, right)
        merge(A, left, mid, right)


mergeSort(S, 0, n)
print(" ".join(map(str, S)))
print(d["count"])
