export interface TransactionReq {
    ProcessingCode:number,
    SystemTraceNr:number,
    FunctionCode:number,
    CardNo:number,
    CardHolder: string,
    AmountTrxn:number,
    CurrencyCode:number
}