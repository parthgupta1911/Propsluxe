const propabi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "propertyId",
          type: "string",
        },
        {
          indexed: true,
          internalType: "address",
          name: "payer",
          type: "address",
        },
      ],
      name: "VerificationFeePaid",
      type: "event",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "minimumPayment",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "propertyId",
          type: "string",
        },
      ],
      name: "payVerificationFee",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];

  export default propabi;