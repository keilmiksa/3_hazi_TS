export function LogAddition(originalMethod: any, context: ClassMethodDecoratorContext) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log(`Adding item...`);
        return originalMethod.apply(this, args);
    }
    return replacementMethod;
}