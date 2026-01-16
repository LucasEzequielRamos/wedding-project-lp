import supabase  from '../utils/supabase'

function normalizeName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '');
}

export async function addGuest(fullName: string, tel: string) {
  const normalizedName = normalizeName(fullName);
  

  
  const { data: guest, error: searchError } = await supabase
    .from('guests')
    .select('*')
    .eq('full_name_lc', normalizedName)
    .single();


  if (searchError || !guest) {
    console.error('Invitado no encontrado:', searchError);
    return false;
  }

  const { error: updateError } = await supabase
    .from('guests')
    .update({
      confirmed: true,
      confirmed_at: new Date().toISOString(),
      tel: tel,
    })
    .eq('full_name_lc', normalizedName);

  if (updateError) {
    console.error('Error actualizando:', updateError);
    return false;
  }

  return { message: 'Guest confirmed' };
}
