def word_to_binary(word):
    binary_result = ' '.join(format(ord(char), '08b') for char in word)
    return binary_result

# Contoh penggunaan
input_word = input("Masukkan kata: ")
binary_representation = word_to_binary(input_word)
print(f"Representasi biner dari '{input_word}' adalah: {binary_representation}")
