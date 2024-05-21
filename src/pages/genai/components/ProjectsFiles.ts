import { BaseComponent } from "../../base/baseComponent";
import { Locator, Page } from "@playwright/test";

/**
 * Class for ProjectsFiles
 */
export class ProjectsFiles extends BaseComponent {
  private container;
  


  constructor(page: Page, container: Locator) {
    super(page);
    this.container = container;
   
  }
}