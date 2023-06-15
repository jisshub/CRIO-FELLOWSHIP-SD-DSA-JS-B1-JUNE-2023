def binary_search(arr, target):
start = 0
end = len(arr) - 1

while start <= end:
  middle = (start + end) // 2

if arr[middle] == target:
  return middle  # Return the index of the target if found
        elif arr[middle] < target:
start = middle + 1
        else:
end = middle - 1

return -1  # Return - 1 if the target is not found

# Example usage:
my_list = [1, 2, 4, 5, 7, 9]
target_value = 7

index = binary_search(my_list, target_value)
if index != -1:
  print("Target found at index:", index)
else:
print("Target not found in the list.")