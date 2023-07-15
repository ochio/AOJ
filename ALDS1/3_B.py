from collections import deque

n, q = map(int, input().split())
q = int(q)
Q = deque()

for i in range(n):
    tmp = input().split()
    Q.append([tmp[0], int(tmp[1])])

total = 0
while Q:
    name, time = Q.popleft()

    if time > q:
        time -= q
        total += q
        Q.append([name, time])
    else:
        total += time
        print(name, total)
