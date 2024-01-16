// seeder.ts
import prisma from "./db";

export async function seed() {
  try {
    const dummyData = [
      {
        title: "Vue.js Component Example",
        code: '<template><div>{{ message }}</div></template><script>export default { data() { return { message: "Hello, Vue.js!" } }}</script>'
      },
      {
        title: "Django Model Definition",
        code: "from django.db import models\nclass MyModel(models.Model):\n    name = models.CharField(max_length=100)\n    description = models.TextField()"
      },
      { title: "Swift Hello World", code: 'print("Hello, World!")' },
      {
        title: "MongoDB Query Example",
        code: 'db.collection.find({ key: "value" })'
      },
      {
        title: "Angular Service Example",
        code: 'import { Injectable } from "@angular/core";\n\n@Injectable({ providedIn: "root" })\nexport class MyService { /* Service code here */ }'
      },
      {
        title: "Rust Function Example",
        code: 'fn main() { println!("Hello, World!"); }'
      },
      {
        title: "GraphQL Query Example",
        code: "query { user(id: 1) { name, email } }"
      },
      {
        title: "Sass Styling Example",
        code: ".my-element { color: #3498db; font-size: 16px; }"
      },
      {
        title: "Flask Route Example",
        code: 'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello, World!"'
      },
      {
        title: "TypeScript Class Example",
        code: 'class MyClass {\n    private data: string;\n    constructor() {\n        this.data = "Hello, TypeScript!";\n    }\n}'
      }
    ];

    for (const data of dummyData) {
      await prisma.snippet.create({
        data: {
          title: data.title,
          code: data.code
        }
      });
    }

    console.log("Seeder executed successfully!");
  } catch (error) {
    console.error("Error executing seeder:", error);
  } finally {
    await prisma.$disconnect();
  }
}
