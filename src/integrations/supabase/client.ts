// Dummy mock supabase client to prevent app crashes
// since the backend has been deleted.

const mockDb = {
  select: () => mockDb,
  order: () => Promise.resolve({ data: [], error: null }),
  single: () => Promise.resolve({ data: null, error: null }),
  insert: () => Promise.resolve({ data: null, error: null }),
  update: () => Promise.resolve({ data: null, error: null }),
  delete: () => mockDb,
  eq: () => Promise.resolve({ data: null, error: null }),
};

export const supabase = {
  from: () => mockDb,
  auth: {
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve({ data: {}, error: null }),
    signUp: () => Promise.resolve({ data: {}, error: null }),
  },
  storage: {
    from: () => ({
      upload: () => Promise.resolve({ error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
      remove: () => Promise.resolve({ error: null }),
    })
  }
};
