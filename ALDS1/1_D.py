n = int(input())

nums = []

for _ in range(n):
    nums.append(int(input()))

minv = nums[0]
maxv = -200000000000

for i in range(1, n):
    maxv = max(maxv, nums[i] - minv)
    minv = min(minv, nums[i])

print(maxv)
