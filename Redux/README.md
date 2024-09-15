- [Redux](#redux)
  - [Redux keywords](#redux-keywords)
  - [Redux Dataflow](#redux-dataflow)
    - [Scenario 1 - Depositing the money](#scenario-1---depositing-the-money)
    - [Scenario 2 - Withdrawing the money](#scenario-2---withdrawing-the-money)
  - [Reducer](#reducer)
  - [Adding package in Project](#adding-package-in-project)

# Redux

- A JS library for predictable and maintainable global state management

## Redux keywords

1. Reducer
2. Action
3. Action creator
4. Action Type
5. Acion Payload
6. Dispatch
7. Store

## Redux Dataflow

- Let's suppose create a few characters to understand redux flow.
  1. **KING** which is basically **UI**.
  2. **SERVENT** which is called `Action creator`
  3. **POSTMAN**, which takes *action* and dispatched (delivered) to the **BANK**
  4. **BANK MANAGER**, is a `reducer`
  5. **BANK**, is a king *account* store.


### Scenario 1 - Depositing the money

1. **KING** wants to deposit some amount into his account. But he can't go to bank directly. So he tells to one his servant, to deposit the amount in the bank.
2. **SERVENT** receives the order from the KING, then he writes an evelop and handover to **POSTMAN** to deposit the amount.
   1. In the envelop, he write two things,
      1. `Deposit`
      2. Amount of `$500`
3. **POSTMAN** receives the evelops from the servant and **dispatched** to the bank.
4. **BANK MANAGER** receives the envelop and update the account of the king and send backs to the **KING**.

<img src="./assets/redux flow 1.jpg" width=500 alt="redux flow"/>

### Scenario 2 - Withdrawing the money

1. **KING** wants to withdraw some amount from his account. But he can't go to bank directly. So he tells to one his servant, to withdraw the amount from the bank.
2. **SERVENT** receives the order from the KING, then he writes an evelop and handover to **POSTMAN** to withdraw the amount.
   1. In the envelop, he write two things,
      1. `Withdraw`
      2. Amount of `$100`
3. **POSTMAN** receives the evelops from the servant and **dispatched** to the bank.
4. **BANK MANAGER** receives the envelop and update the account of the king and send backs to the **KING**.

<img src="./assets/redux flow 2.jpg" width=500 alt="redux flow"/>

## Reducer

1. `account` object is have `accountReducer`.
2. `users` object is have `usersReducer`.
3. 

## Adding package in Project

1. Create a folder with name of `store` or `state` or `reducer` in the root `src/[name]` folder.
2. Inside the `store` folder, create a `reducer` folder.
3. Now, create a `accountReducer.js` in **reducer** folder.
4. Now copy and paste code from the below.
   1. ```js
      const reducer = (state = 0 , action) => {
        switch(action.type){
          case "deposit":
            return state + action.payload;
          case "withdraw":
            return state - action.payload;
          case default:
            return state;
        }
      }
      export default reducer;
      ```