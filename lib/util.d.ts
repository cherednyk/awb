export declare function parseJson(params: object | string): object | string

export declare var WEB_EMENET_ID: string

export declare function assertArray(arg: any): boolean
export declare function assertString(arg: any): boolean
export declare function assertNumber(arg: any): boolean
export declare function assertFunction(arg: any): boolean
export declare function assertObject(arg: any): boolean
export declare function toElementObject(elementId: string): object

export declare function waitCondition(
  conditionFn: Promise,
  conditionTarget: Function | boolean,
  time: number
): Promise<boolean>

export declare function waitElementPresent(
  conditionFn: Promise,
  sessionId: string,
  selector: string,
  time: number
): Promise<object>