

# React Component


## Information available to React


### 1. props

* props is a **json** object passed by parent to the child component

<pre>
    <Parent>
        <Child value={1} value2={2}/>
    </Parent>
</pre>

* now the child received a **props** of following structure

<pre>
props:{value1:1, value2:2}
</pre>

* child can use the props but cant change it

* parent can change values passed to prop

* when the values are changed by parent, child component will be automatically updated (**re-rendered**)



## local variables

* a component can display local variable value in the UI

* However if those values change the components are not automatically re-rendered

* **React doesn't know when they changed**


## state

* **state** just like **props** are **Json object**

* **state** are internal to a component

* **state** can be modified in a **special way** so that react can **re-ender** component when **state** change

* **state** can be present only in **class components** not **function components**

## Class based component

1. extends React.Component<PropType>
2. defines a **render()**
    * this function returns the required **JSX**
    * it has same jon as the **function component**

3. render doesn't take **props**, it is assigned to the object as **member** property

4. to access props we need to use **this.props**

#### Note: A function component is equivalent to the render function of a class component