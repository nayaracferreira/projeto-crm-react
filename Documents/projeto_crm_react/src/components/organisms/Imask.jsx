   import React from 'react'

   import { IMaskInput } from 'react-imask'
   
   export default function Imask() {
     return (        
        <div>
         <label className="telefone" htmlFor="telefone">Telefone*</label>
            <IMaskInput
            mask="+{55}(00)00000-0000"
            name="fone" 
            type="tel"  
            placeholder="(00) 00000-0000"
            required
            />
        </div>
     )
   }

   
    