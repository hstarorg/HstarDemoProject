class Test {
  private status: string;

  markAsPending(this: { hello: string }) {
    this.hello;
  }
}

class Test2 {
  public status: { a: string } | null;
  public status2!: { a: string } | null;
  constructor() {}
  markAsPending() {
    console.log(this.status!.a);
    console.log(this.status2!.a);
  }
}

type Entity = {
  name: string;
};

function validateEntity(e?: Entity | null) {
  // Throw exception if e is null or invalid entity
}

function processEntity(e?: Entity | null) {
  let s = e.name; // Assert that e is non-null and access name
}

var a = new Test2();
a.markAsPending();
