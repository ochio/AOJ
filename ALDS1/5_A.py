n = int(input())
A = list(map(int, input().split()))
q = int(input())
m = list(map(int, input().split()))

S = [0] * n

for i in range(n):
    S[i] = 0

s = set()


def rec(i):
    if i == n:
        t = 0
        for i in range(n):
            if S[i]:
                t += A[i]
        s.add(t)
        return
    rec(i + 1)
    S[i] = 1
    rec(i + 1)
    S[i] = 0


rec(0)

for i in range(q):
    ans = "yes" if m[i] in s else "no"
    print(ans)
