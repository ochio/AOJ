n, k = map(int, input().split())
w = [int(input()) for _ in range(n)]


def cal(P):
    j = 0
    for i in range(k):
        tmp = 0
        while tmp + w[j] <= P:
            tmp += w[j]
            j += 1
            if n == j:
                return n
    return j


left = 0
right = 100000 * 10000

while right - left > 1:
    middle = (left + right) // 2
    if cal(middle) >= n:
        right = middle
    else:
        left = middle
else:
    print(right)
