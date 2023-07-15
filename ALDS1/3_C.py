n = int(input())


class LL:
    def __init__(self):
        self.l = {}
        self.head = None
        self.tail = None

    def insert(self, key, val):
        self.l[key] = {"prev": self.head, "next": None, "val": val}
        if self.head in self.l:
            self.l[self.head]["next"] = key
        self.head = key
        if self.tail is None:
            self.tail = key

    def delete(self, val):
        pointer = self.head
        while pointer is not None and self.l[pointer]["val"] != val:
            pointer = self.l[pointer]["prev"]
        if pointer is None:
            return
        prev, next = self.l[pointer]["prev"], self.l[pointer]["next"]
        if next is not None:
            self.l[next]["prev"] = prev
        if prev is not None:
            self.l[prev]["next"] = next
        if pointer == self.head:
            self.head = prev
        if pointer == self.tail:
            self.tail = next
        if not self.head in self.l:
            self.head = None
        if not self.tail in self.l:
            self.tail = None

    def deleteFirst(self):
        self.delete(self.l[self.head]["val"])

    def deleteLast(self):
        next = self.l[self.tail]["next"]
        if next is None:
            self.tail = None
            self.head = None
        else:
            self.l[next]["prev"] = None
            self.tail = next

    def display(self):
        result = []
        pointer = self.head
        while pointer is not None:
            result.append(self.l[pointer]["val"])
            pointer = self.l[pointer]["prev"]
        return result


ll = LL()

for i in range(n):
    command = input().split()
    if command[0] == "insert":
        ll.insert(i, command[1])
    elif command[0] == "delete":
        ll.delete(command[1])
    elif command[0] == "deleteFirst":
        ll.deleteFirst()
    elif command[0] == "deleteLast":
        ll.deleteLast()


print(" ".join(ll.display()))
