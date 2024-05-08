export declare abstract class BaseEffect {
	protected OnStart(): void;
	protected OnConstruct(): void;
	protected OnDestroy(): void;
}

type Constructor<T> = new (...args: never[]) => T;

export interface FunctionAttributes {
	Unreliable: boolean;
}

export declare function VisualEffectDecorator<T extends Constructor<BaseEffect>>(ctor: T): T;
export declare function Config(
	attributes: Partial<FunctionAttributes>,
): <T extends BaseEffect>(ctor: T, methodName: string) => void;
