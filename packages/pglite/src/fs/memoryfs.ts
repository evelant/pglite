import { EmscriptenBuiltinFilesystem } from './base.js'

export class MemoryFS extends EmscriptenBuiltinFilesystem {
  async closeFs(): Promise<void> {
    this.FS!().quit()
  }
}
