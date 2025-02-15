export declare function copyTemplate(framework: string, lang: string, runtime: string, folderProject: string): void;
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
export declare function execShellCommand(cmd: string): Promise<unknown>;
export declare const installDeps: (packageManager: string, nameProject: string) => Promise<void>;
