n = int(input())


class Dic:
    def __init__(self) -> None:
        self.s = set()

    def insert(self, v):
        self.s.add(v)

    def find(self, v):
        if v in self.s:
            print("yes")
        else:
            print("no")


d = Dic()
for _ in range(n):
    c, v = input().split()
    if c == "insert":
        d.insert(v)
    else:
        d.find(v)
