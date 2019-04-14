import { NgModule } from '@angular/core';

import { CepappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CepappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CepappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CepappSharedCommonModule {}
