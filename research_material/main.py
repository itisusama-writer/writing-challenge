import re

input_file = "data.md"
output_file = "hashtags.md"

try:
    with open(input_file, "r", encoding="utf-8") as file:
        content = file.read()
    
    hashtags = re.findall(r"#\w+", content)

    with open(output_file, "w", encoding="utf-8") as file:
        file.write("\n".join(hashtags))
    
    print(f"Extracted {len(hashtags)} hashtags and saved to '{output_file}'.")

except FileNotFoundError:
    print(f"The file '{input_file}' does not exist.")
except Exception as e:
    print(f"An error occurred: {e}")
