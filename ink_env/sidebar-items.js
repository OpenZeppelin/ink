initSidebarItems({"enum":[["DefaultEnvironment","The fundamental types of the default configuration."],["Error","Errors that can be encountered upon environmental interaction."]],"fn":[["account_id","Returns the account ID of the executed contract."],["balance","Returns the balance of the executed contract."],["block_number","Returns the current block number."],["block_timestamp","Returns the current block timestamp."],["call_chain_extension","Calls the chain extension with the given ID and inputs."],["caller","Returns the address of the caller of the executed contract."],["clear_contract_storage","Clears the contract's storage key entry."],["debug_println","Prints the given contents to the environmental log."],["decode_input","Returns the execution input to the executed contract and decodes it as `T`."],["emit_event","Emits an event with the given event data."],["eval_contract","Evaluates a contract message and returns its result."],["gas_left","Returns the amount of gas left for the contract execution."],["get_contract_storage","Returns the value stored under the given key in the contract's storage if any."],["hash_bytes","Conducts the crypto hash of the given input and stores the result in `output`."],["hash_encoded","Conducts the crypto hash of the given encoded input and stores the result in `output`."],["instantiate_contract","Instantiates another contract."],["invoke_contract","Invokes a contract message."],["minimum_balance","Returns the minimum balance that is required for creating an account."],["random","Returns a random hash seed."],["rent_allowance","Returns the current rent allowance for the executed contract."],["restore_contract","Restores a smart contract in tombstone state."],["return_value","Returns the value back to the caller of the executed contract."],["set_contract_storage","Writes the value to the contract storage under the given key."],["set_rent_allowance","Sets the rent allowance of the executed contract to the new value."],["terminate_contract","Terminates the existence of the currently executed smart contract."],["tombstone_deposit","Returns the tombstone deposit for the contracts chain."],["transfer","Transfers value from the contract to the destination account ID."],["transferred_balance","Returns the transferred balance for the contract execution."],["weight_to_fee","Returns the price for the specified amount of gas."]],"mod":[["call","Utilities to call or instantiate contracts on the chain."],["hash","Provides type definitions and traits for the built-in cryptographic hashes."],["test","Operations on the off-chain testing environment."]],"struct":[["AccountId","The default environment `AccountId` type."],["Hash","The default environment `Hash` type."],["ReturnFlags","The flags to indicate further information about the end of a contract execution."]],"trait":[["Clear","The equivalent of `Zero` for hashes."],["Environment","The environmental types usable by contracts defined with ink!."],["Topics","Implemented by event types to guide the event topic serialization using the topics builder."]],"type":[["Result","A result of environmental operations."]]});