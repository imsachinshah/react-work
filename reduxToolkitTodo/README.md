# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Notes of React Redux Toolkit

1. **Create Store** - single source of truth <br>
it has `configureStore` <br/>
introduce `reducer`

2. **Create Slice(functions) method(`createSlice`)** <br>
Slice has `name, initialState, reducers :{key: function} `<br>
Access of two things  `(State, action)`  <br>
```javascript
state = state value in the store
action = action.payload 
export individual functionality 
export main source export
```

3. **Add Todo** - Give values to State i.e `Dispatch Courier  = use method useDispatch()` <br>
`dispatch(addTodo())`

4. **Take Values** - `useSelector((state) => state.todos)`  <br> state ka access chaiye <br>
variable me values lelo ek baar aagaie uske baad pure JS concept hai 

credit for notes: https://www.youtube.com/@smittrivedi427