How to Structure State in React
When writing a component with state, how you structure it matters a lot. A well-structured state makes your code easier to understand, debug, and maintain.
Here are 5 simple tips to follow:

1. Group Related State Together
If two or more pieces of state always change together, group them into one object.

// ✅ Good
const [user, setUser] = useState({ name: "Rakesh", age: 25 });

// ❌ Bad
const [name, setName] = useState("Rakesh");
const [age, setAge] = useState(25);


2. Avoid Contradictions in State
Don't let two state variables hold conflicting info.

// ❌ Bad: These can contradict each other
const [isLoggedIn, setIsLoggedIn] = useState(true);
const [status, setStatus] = useState("loggedOut");

// ✅ Good: One truth is enough
const [status, setStatus] = useState("loggedIn");


3. Avoid Redundant State
If you can calculate a value from existing state or props, don’t store it separately.

// ❌ Bad
const [count, setCount] = useState(4);
const [isEven, setIsEven] = useState(true);

// ✅ Good
const isEven = count % 2 === 0;


4. Avoid Duplicated State
Avoid storing the same data in multiple places — it's hard to keep them in sync.

// ❌ Bad
const [userName, setUserName] = useState("Rakesh");
const [profile, setProfile] = useState({ name: "Rakesh", age: 25 });

// ✅ Good
const [profile, setProfile] = useState({ name: "Rakesh", age: 25 });



5. Avoid Deeply Nested State
Deep state = harder updates. Keep it flat when you can.

// ❌ Bad
const [user, setUser] = useState({
  address: {
    location: {
      street: "MG Road"
    }
  }
});

// ✅ Good
const [address, setAddress] = useState({ street: "MG Road" });
- Add docstrings to functions
- Avoid using redundant states.
