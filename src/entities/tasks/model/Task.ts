export class Task {
    constructor(
        public id: never,
        public assigneeId: any,
        public title: string,
        public description?: string,
        public progressId?: any,
        public createdAt?: any,
        public updatedAt?: any
    ) {}
}
