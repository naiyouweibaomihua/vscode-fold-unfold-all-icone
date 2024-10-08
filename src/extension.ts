// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate({subscriptions}: vscode.ExtensionContext) {
	const foldStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	foldStatusBarItem.command = "editor.foldLevel1";
	foldStatusBarItem.tooltip = "fold Level 1";
	foldStatusBarItem.text = `{$(chevron-right)1$(chevron-left)}`;
	subscriptions.push(foldStatusBarItem);
	foldStatusBarItem.show();

	const unfoldStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	unfoldStatusBarItem.command = "editor.unfoldAll";
	unfoldStatusBarItem.tooltip = "unfold all";
	unfoldStatusBarItem.text = `{$(chevron-left)$(chevron-right)}`;
	subscriptions.push(unfoldStatusBarItem);
	unfoldStatusBarItem.show();

	const foldStatusBarItem2 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
	foldStatusBarItem2.command = "editor.foldLevel2";
	foldStatusBarItem2.tooltip = "fold Level 2";
	foldStatusBarItem2.text = `{$(chevron-right)2$(chevron-left)}`;
	subscriptions.push(foldStatusBarItem2);
	foldStatusBarItem2.show();
}

// this method is called when your extension is deactivated
export function deactivate() {}
